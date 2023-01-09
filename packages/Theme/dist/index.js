// src/generic.css
import css from "@bxreact/css";
var generic_default = css`:root {
    --bx-xs-radius: 0.75rem;
    --bx-sm-radius: 0.75rem;
    --bx-md-radius: 1rem;
    --bx-lg-radius: 1rem;

    --bx-font-size-title-1: 2rem;
    --bx-font-size-title-2: 1.375rem;
    --bx-font-size-title-3: 1.125rem;

    --bx-font-size-text-1: 1rem;
    --bx-font-size-text-2: 0.875rem;
    --bx-font-size-text-3: 0.625rem;

    --bx-font-bold: 900;

    --bx-font-primary: "Mont", system-ui, -apple-system, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    --bx-font-secondary: "Lato", system-ui, -apple-system, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";

    --bx-space-xxl: 4rem;
    --bx-space-xl: 2rem;
    --bx-space-lg: 1.5rem;
    --bx-space-md: 1rem;
    --bx-space-sm: 0.75rem;
    --bx-space-xs: 0.5rem;
    --bx-space-xxs: 0.25rem;
}
`;

// src/default.css
import css2 from "@bxreact/css";
var default_default = css2`* {
    line-height: var(--bx-font-line-height, 1.35);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
    font-family: var(--bx-font-primary);
}

body {
    font-family: var(--bx-font-secondary);
}

button,
a {
    text-decoration: none;
    font-family: unset;
}

h1 {
    font-size: var(--bx-font-size-title-1);
}

h2 {
    font-size: var(--bx-font-size-title-2);
}

h3 {
    font-size: var(--bx-font-size-title-3);
}

strong,
b {
    font-weight: var(--bx-font-bold);
}
`;

// src/colors.css
import css3 from "@bxreact/css";
var colors_default = css3`:root {
    /* bx colors */
    /* blue */
    --bx-color-blue: #0032a0;
    --bx-color-blue-space: #0a1433;
    --bx-color-blue-tea: #0f1e4c;
    --bx-color-blue-clip: #142866;
    --bx-color-blue-point: #193180;
    --bx-color-blue-cross: #1f3b99;
    --bx-color-blue-moon: #294fcc;
    --bx-color-blue-place: #294fcc;
    --bx-color-blue-flip: #2e59e5;
    --bx-color-blue-glam: #4773ff;
    --bx-color-blue-rock: #5c82ff;
    --bx-color-blue-fun: #7092ff;
    --bx-color-blue-air: #85a1ff;
    --bx-color-blue-soft: #99b1ff;
    --bx-color-blue-new: #adc1ff;
    --bx-color-blue-shine: #c2d0ff;
    --bx-color-blue-clear: #d6e0ff;
    --bx-color-blue-cloud: #ebefff;
    /* orange */
    --bx-color-orange: #ff7e44;
    --bx-color-orange-blod: #190d07;
    --bx-color-orange-wine: #4c2614;
    --bx-color-orange-novel: #66321b;
    --bx-color-orange-space: #994c29;
    --bx-color-orange-go: #8f4726;
    --bx-color-orange-get: #cc6536;
    --bx-color-orange-full: #e5713d;
    --bx-color-orange-miles: #ff8b57;
    --bx-color-orange-gum: #ff9869;
    --bx-color-orange-point: #ffa57c;
    --bx-color-orange-fly: #ffb28f;
    --bx-color-orange-rubber: #ffbea1;
    --bx-color-orange-elastic: #ffca99;
    --bx-color-orange-candy: #ffd8c7;
    --bx-color-orange-rose: #ffe5da;
    --bx-color-orange-blank: #fff2ec;
    /* light blue */
    --bx-color-lblue: #2bb9ff;
    --bx-color-lblue-only: #041219;
    --bx-color-lblue-night: #092533;
    --bx-color-lblue-sea: #114a66;
    --bx-color-lblue-our: #155c80;
    --bx-color-lblue-well: #1a6f99;
    --bx-color-lblue-give: #1e81b2;
    --bx-color-lblue-bx: #2294cc;
    --bx-color-lblue-way: #27a6e5;
    --bx-color-lblue-sky: #40c0ff;
    --bx-color-lblue-ice: #55c7ff;
    --bx-color-lblue-drop: #6bceff;
    --bx-color-lblue-dream: #80d5ff;
    --bx-color-lblue-snow: #95dcff;
    --bx-color-lblue-winter: #aae3ff;
    --bx-color-lblue-easy: #bfeaff;
    --bx-color-lblue-thin: #d5f1ff;
    --bx-color-lblue-day: #f2fcff;
    /* light orange */
    --bx-color-lorange: #fda460;
    --bx-color-lorange-state: #322615;
    --bx-color-lorange-grow: #654c2a;
    --bx-color-lorange-truck: #97723f;
    --bx-color-lorange-box: #b08549;
    --bx-color-lorange-pyme: #ca9854;
    --bx-color-lorange-try: #e3ab5e;
    --bx-color-lorange-summer: #fcbe69;
    --bx-color-lorange-fruit: #fcc478;
    --bx-color-lorange-row: #fdcb87;
    --bx-color-lorange-make: #fdd296;
    --bx-color-lorange-travel: #fdd8a5;
    --bx-color-lorange-send: #feecd2;
    --bx-color-lorange-skin: #fef2e1;
    /* black */
    --bx-color-black: #212121;
    --bx-color-grey-one: #333333;
    --bx-color-grey-press: #4d4d4d;
    --bx-color-grey-mistery: #666666;
    --bx-color-grey-play: #808080;
    --bx-color-grey-time: #b3b3b3;
    --bx-color-grey-me: #cccccc;
    --bx-color-grey-you: #e5e5e5;
    --bx-color-grey-up: #f6f6f6;
    --bx-color-grey-on: #fbfbfb;
    --bx-color-white: #ffffff;
    /* green */
    --bx-color-green-future: #408d5c;
    --bx-color-green-game: #effaf3;
    /* extras */
    --bx-color-light-express: #00b4db;
    --bx-color-light-dream: #e5f7fb;
    /* alerts */
    /* red */
    --bx-color-red-alert: #fd2626;
    --bx-color-red-black: #4c0b0b;
    --bx-color-red-up: #7e1313;
    --bx-color-red-blood: #b11b1b;
    --bx-color-red-medium: #fe6767;
    --bx-color-red-nice: #fe9292;
    --bx-color-red-land: #febebe;
    --bx-color-red-clean: #ffe9e9;
    /* yellow */
    --bx--color-yellow-alert: #ffe27c;
    --bx--color-yellow-go: #665a32;
    --bx--color-yellow-gold: #99884b;
    --bx--color-yellow-brown: #e0c35c;
    --bx--color-yellow-air: #ffe896;
    --bx--color-yellow-nice: #ffeeb1;
    --bx--color-yellow-cloud: #fff6d8;
    --bx--color-yellow-blank: #fffcf2;
    /* Progress */
    --bx-color-success: #198754;
    --bx-color-info: #0dcaf0;
    --bx-color-warning: #ffc107;
    --bx-color-danger: #dc3545;
    /* general */
    --bx-bg: #ffffff;
    --bx-bg-secondary: #eaeaeb;
    --bx-fg: #18191a;
    --bx-grey: #eaeaea;
    --bx-selection: rgba(0, 0, 0, 0.99);
    --bx-skeleton-bg: rgba(0, 0, 0, 0.11);
    --bx-modal-border: rgba(0, 0, 0, 0.2);
    --bx-bg-gradient: linear-gradient(
        85.92deg,
        var(--bx-color-blue) 14.32%,
        var(--bx-color-lblue) 99.53%
    );
    --bx-bg-login: var(--bx-bg-gradient);
    /* colors */
    --bx-color-light: #f8f9fa;
    --bx-color-dark: #212529;
    --bx-color-secondary: #6c757d;
    /* logo bx */
    --bx-logo-principal: #0033a1;
    --bx-logo-principal-inverted: #ffffff;
    --bx-logo-dot: #4ac1e0;
    /* buttons */
    --bx-button-fg: #18191a;
    --bx-button-hover: #000000;
    --bx-button-secondary-fg: #f0f0f0;
    --bx-button-secondary-hover: #ced4da;
    --bx-button-bg-primary: var(--bx-color-orange);
    --bx-button-fg-primary: #ffffff;
    --bx-button-bg-primary-hover: var(--bx-color-orange-full);
    --bx-button-fg-primary-hover: #ffffff;
    --bx-login-button-bg: #ffffff;
    --bx-login-button-shadow: 0px 2px 4px -2px rgba(24, 39, 75, 0.12),
        0px 4px 4px -2px rgba(24, 39, 75, 0.08);
    /* alerts */
    --bx-color-alert-dark: #d3d3d4;
    --bx-color-alert-border-dark: #bcbebf;
    --bx-color-alert-danger: #dc3545;
    --bx-color-alert-success-border: var(--bx-color-green-future);
    --bx-color-alert-success-fg: var(--bx-color-green-future);
    --bx-color-alert-success-bg: var(--bx-color-green-game);
    --bx-color-alert-danger-border: var(--bx-color-red-alert);
    --bx-color-alert-danger-fg: var(--bx-color-red-alert);
    --bx-color-alert-danger-bg: var(--bx-color-red-clean);
    --bx-color-alert-info-border: var(--bx-color-light-express);
    --bx-color-alert-info-fg: var(--bx-color-light-express);
    --bx-color-alert-info-bg: var(--bx-color-light-dream);
    --bx-color-alert-warning-border: var(--bx--color-yellow-brown);
    --bx-color-alert-warning-fg: var(--bx--color-yellow-gold);
    --bx-color-alert-warning-bg: var(--bx--color-yellow-blank);
    /* forms */
    --bx-form-input-border: #ced4da;
    --bx-form-text: #6c757d;
    --bx-form-disabled: #e9ecef;
    /* form validation */
    --bx-fv-valid: #28a745;
    --bx-fv-invalid: #dc3545;
    --bx-fv-invalid-rgba: rgba(220, 53, 69, 0.25);
    /* progress */
    --bx-progress-bg: #e9ecef;
    --bx-progress-success: #198754;
    --bx-progress-info: #0dcaf0;
    --bx-progress-warning: #ffc107;
    --bx-progress-danger: #dc3545;

    /* backgrounds */
    --bx-bg-register: var(--bx-color-lblue-day);
    --bx-register-header-bg: var(--bx-color-blue);
    --bx-register-avatar-edit-bg: var(--bx-color-blue);

    /* register */
    --bx-register-header-height: 64px;
    --bx-register-header-shadow: 0px 4px 6px -4px rgba(24, 39, 75, 0.12),
        0px 8px 8px -4px rgba(24, 39, 75, 0.08);
    --bx-register-footer-height: 56px;
    --bx-register-footer-fg: var(--bx-color-lblue-give);
}
`;

// src/input.css
import css4 from "@bxreact/css";
var input_default = css4`:root {
    --bx-input-transition: 0.25s ease all;

    --bx-input-border: 1px solid;

    --bx-input-bgcolor: var(--bx-color-white);
    --bx-input-color: unset;

    --bx-input-font-family: var(--bx-font-secondary);
    --bx-input-font-weight: 700;

    --bx-input-xs-font-size: var(--bx-font-size-text-2);
    --bx-input-sm-font-size: var(--bx-font-size-text-2);
    --bx-input-md-font-size: var(--bx-font-size-text-1);
    --bx-input-lg-font-size: var(--bx-font-size-title-3);

    --bx-input-xs-height: 2rem;
    --bx-input-sm-height: 2.5rem;
    --bx-input-md-height: 3rem;
    --bx-input-lg-height: 3.5rem;

    --bx-input-xs-padding: 0.5rem 1rem;
    --bx-input-sm-padding: 0.5rem 1rem;
    --bx-input-md-padding: 0.5rem 1.5rem;
    --bx-input-lg-padding: 0.5rem 2rem;

    --bx-input-xs-radius: var(--bx-xs-radius);
    --bx-input-sm-radius: var(--bx-sm-radius);
    --bx-input-md-radius: var(--bx-md-radius);
    --bx-input-lg-radius: var(--bx-lg-radius);

    --bx-input-gap: 0.5rem;
}
`;

// src/button.css
import css5 from "@bxreact/css";
var button_default = css5`:root {
    --bx-button-shadow: 0px 2px 4px -2px rgba(24, 39, 75, 0.2);

    --bx-button-border: 1.5px solid;

    --bx-button-filled-bgcolor: var(--bx-color-orange);
    --bx-button-filled-color: var(--bx-color-white);
    --bx-button-filled-disabled-bgcolor: var(--bx-color-orange-elastic);
    --bx-button-filled-disabled-color: var(--bx-color-white);
    --bx-button-filled-hover-bgcolor: var(--bx-color-orange-full);
    --bx-button-filled-hover-color: var(--bx-color-white);

    --bx-button-gap: 0.5rem;

    --bx-button-thead-bgcolor: var(--bx-color-white);
    --bx-button-thead-color: var(--bx-color-black);

    --bx-button-thead-disabled-bgcolor: var(--bx-color-white);
    --bx-button-thead-disabled-color: var(--bx-color-grey-time);

    --bx-button-thead-info-bgcolor: var(--bx-color-green-game);
    --bx-button-thead-info-color: var(--bx-color-green-future);

    --bx-button-thead-success-bgcolor: var(--bx-color-lorange-send);
    --bx-button-thead-success-color: var(--bx-color-orange-get);

    --bx-button-thead-warning-bgcolor: var(--bx-color-lorange-send);
    --bx-button-thead-warning-color: var(--bx-color-orange-get);

    --bx-button-thead-danger-bgcolor: var(--bx-color-red-clean);
    --bx-button-thead-danger-color: var(--bx-color-red-alert);
}
`;

// src/card.css
import css6 from "@bxreact/css";
var card_default = css6`:root {
    --bx-card-background: var(--bx-color-white);
    --bx-card-radius: 1rem;
    --bx-card-max-width: 60rem;

    --bx-card-md-shadow: 0px 5px 8px -2px rgba(24, 39, 75, 0.2);
    --bx-card-lg-shadow: 0px 8px 14px -10px rgba(33, 33, 33, 0.08);
}
`;
