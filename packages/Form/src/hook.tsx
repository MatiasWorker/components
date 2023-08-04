import {
    useState,
    useEffect,
    createContext,
    useContext,
    FormHTMLAttributes,
    useRef,
    useCallback,
    ReactNode,
} from "react";

interface Fields {
    [name: string]: ValidityState & { validationMessage: string };
}
interface ObjectValidityState {
    tryToSubmit: boolean;
    fields: Fields;
}

type FieldsWithTry = { [prop: string]: boolean };

const ValidityStateContext = createContext({} as ObjectValidityState);
const RevalidityStateContext = createContext<() => void>(() => null);

const mapState = (
    target: HTMLFormElement,
    fieldWithTry: FieldsWithTry
): Fields => {
    const size = Object.keys(fieldWithTry).length;
    return [...target.querySelectorAll("input, select, textarea")].reduce(
        (current, node) => {
            const { name, validity, validationMessage } = node as any;

            const state = {};
            const isSelect = node instanceof HTMLSelectElement;
            for (const prop in validity) {
                if (prop === "valid") {
                    if (isSelect) {
                        state[prop] = size ? !!node.value : true;
                    } else {
                        state[prop] = fieldWithTry[name]
                            ? validity[prop]
                            : true;
                    }
                } else {
                    state[prop] = validity[prop];
                }
            }

            return name
                ? {
                      ...current,
                      [name]: {
                          ...state,
                          validationMessage,
                      },
                  }
                : current;
        },
        {}
    );
};

export function ValidityStateProvider({
    children,
    onSubmit,
    onClick,
    ...props
}: Omit<FormHTMLAttributes<HTMLFormElement>, "children"> & {
    children:
        | ReactNode
        | ((
              form: ReturnType<typeof useValidateState>,
              revalidate: ReturnType<typeof useRevalidateState>
          ) => ReactNode);
}) {
    const prev = useRef<FieldsWithTry>({});
    const ref = useRef<HTMLFormElement>();

    const [state, setState] = useState<ObjectValidityState>({
        tryToSubmit: false,
        fields: {},
    });

    const getFields = (isSubmit?: boolean) => {
        const fieldsWithTry = prev.current;

        const form = Object.fromEntries(new FormData(ref.current));

        for (const prop in form) {
            const value = form[prop];
            if (!fieldsWithTry[prop] && (isSubmit || value)) {
                fieldsWithTry[prop] = true;
            }
        }

        const fields = mapState(ref.current, (prev.current = fieldsWithTry));

        return fields;
    };

    const setFields = () =>
        setState((state) => ({
            ...state,
            fields: getFields(),
        }));

    const revalidate = useCallback(() => {
        // HACK para escapar del error de transiciones internas de React
        setTimeout(() => {
            prev.current = {};
            setFields();
        }, 100);
    }, []);

    useEffect(() => {
        setFields();
    }, []);

    return (
        <form
            {...props}
            ref={ref}
            onChange={(event) => {
                setState({
                    ...state,
                    fields: getFields(),
                });

                return props?.onChange?.(event);
            }}
            onSubmit={(event) => {
                return onSubmit && onSubmit(event);
            }}
            onClick={(event) => {
                if (
                    event.nativeEvent
                        .composedPath()
                        .find((element: any) => element.type === "submit")
                ) {
                    console.log(getFields());

                    setState({
                        ...state,
                        tryToSubmit: true,
                        fields: getFields(true),
                    });
                }
                return onClick && onClick(event);
            }}
        >
            <RevalidityStateContext.Provider value={revalidate}>
                <ValidityStateContext.Provider value={state}>
                    {typeof children === "function"
                        ? children(state.fields, revalidate)
                        : children}
                </ValidityStateContext.Provider>
            </RevalidityStateContext.Provider>
        </form>
    );
}

export function useValidateState() {
    return useContext(ValidityStateContext).fields;
}

export function useRevalidateState() {
    return useContext(RevalidityStateContext);
}

