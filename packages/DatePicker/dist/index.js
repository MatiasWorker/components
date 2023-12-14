// src/index.tsx
import "@bxreact/input";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";

// ../../node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// ../../node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// ../../node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// ../../node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// ../../node_modules/date-fns/esm/locale/es/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 d\xEDa",
    other: "{{count}} d\xEDas"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 a\xF1o",
    other: "alrededor de {{count}} a\xF1os"
  },
  xYears: {
    one: "1 a\xF1o",
    other: "{{count}} a\xF1os"
  },
  overXYears: {
    one: "m\xE1s de 1 a\xF1o",
    other: "m\xE1s de {{count}} a\xF1os"
  },
  almostXYears: {
    one: "casi 1 a\xF1o",
    other: "casi {{count}} a\xF1os"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "en " + result;
    } else {
      return "hace " + result;
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// ../../node_modules/date-fns/esm/locale/es/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// ../../node_modules/date-fns/esm/locale/es/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'ma\xF1ana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
};
var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'ma\xF1ana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  } else {
    return formatRelativeLocale[token];
  }
};
var formatRelative_default = formatRelative;

// ../../node_modules/date-fns/esm/locale/es/_lib/localize/index.js
var eraValues = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "despu\xE9s de cristo"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
};
var dayValues = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xE1"],
  abbreviated: ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"],
  wide: ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "ma\xF1ana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la ma\xF1ana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + "\xBA";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// ../../node_modules/date-fns/esm/locale/es/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
};
var parseEraPatterns = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
};
var parseMonthPatterns = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
};
var matchDayPatterns = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// ../../node_modules/date-fns/esm/locale/es/index.js
var locale = {
  code: "es",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
var es_default = locale;

// src/index.tsx
import { Dropdown } from "@bxreact/dropdown";
import * as Icon from "@bxreact/icon";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.rdrCalendarWrapper {
  box-sizing: border-box;
  background: #ffffff;
  display: inline-flex;
  flex-direction: column;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.rdrDateDisplay{
  display: flex;
  justify-content: space-between;
}

.rdrDateDisplayItem{
  flex: 1 1;
  width: 0;
  text-align: center;
  color: inherit;
}

.rdrDateDisplayItem + .rdrDateDisplayItem{
    margin-left: 0.833em;
  }

.rdrDateDisplayItem input{
    text-align: inherit
  }

.rdrDateDisplayItem input:disabled{
      cursor: default;
    }

.rdrDateDisplayItemActive{}

.rdrMonthAndYearWrapper {
  box-sizing: inherit;
  display: flex;
  justify-content: space-between;
}

.rdrMonthAndYearPickers{
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rdrMonthPicker{}

.rdrYearPicker{}

.rdrNextPrevButton {
  box-sizing: inherit;
  cursor: pointer;
  outline: none;
}

.rdrPprevButton {}

.rdrNextButton {}

.rdrMonths{
  display: flex;
}

.rdrMonthsVertical{
  flex-direction: column;
}

.rdrMonthsHorizontal > div > div > div{
  display: flex;
  flex-direction: row;
}

.rdrMonth{
  width: 27.667em;
}

.rdrWeekDays{
  display: flex;
}

.rdrWeekDay {
  flex-basis: calc(100% / 7);
  box-sizing: inherit;
  text-align: center;
}

.rdrDays{
  display: flex;
  flex-wrap: wrap;
}

.rdrDateDisplayWrapper{}

.rdrMonthName{}

.rdrInfiniteMonths{
  overflow: auto;
}

.rdrDateRangeWrapper{
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.rdrDateInput {
  position: relative;
}

.rdrDateInput input {
    outline: none;
  }

.rdrDateInput .rdrWarning {
    position: absolute;
    font-size: 1.6em;
    line-height: 1.6em;
    top: 0;
    right: .25em;
    color: #FF0000;
  }

.rdrDay {
  box-sizing: inherit;
  width: calc(100% / 7);
  position: relative;
  font: inherit;
  cursor: pointer;
}

.rdrDayNumber {
  display: block;
  position: relative;
}

.rdrDayNumber span{
    color: #1d2429;
  }

.rdrDayDisabled {
  cursor: not-allowed;
}

@supports (-ms-ime-align: auto) {
  .rdrDay {
    flex-basis: 14.285% !important;
  }
}

.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{
  pointer-events: none;
}

.rdrInRange{}

.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{
  pointer-events: none;
}

.rdrDayHovered{}

.rdrDayActive{}

.rdrDateRangePickerWrapper{
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.rdrDefinedRangesWrapper{}

.rdrStaticRanges{
  display: flex;
  flex-direction: column;
}

.rdrStaticRange{
  font-size: inherit;
}

.rdrStaticRangeLabel{}

.rdrInputRanges{}

.rdrInputRange{
  display: flex;
}

.rdrInputRangeInput{}

.rdrCalendarWrapper{
  color: #000000;
  font-size: 12px;
}

.rdrDateDisplayWrapper{
  background-color: rgb(239, 242, 247);
}

.rdrDateDisplay{
  margin: 0.833em;
}

.rdrDateDisplayItem{
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 2px 0 rgba(35, 57, 66, 0.21);
  border: 1px solid transparent;
}

.rdrDateDisplayItem input{
    cursor: pointer;
    height: 2.5em;
    line-height: 2.5em;
    border: 0px;
    background: transparent;
    width: 100%;
    color: #849095;
  }

.rdrDateDisplayItemActive{
  border-color: currentColor;
}

.rdrDateDisplayItemActive input{
    color: #7d888d
  }

.rdrMonthAndYearWrapper {
  align-items: center;
  height: 60px;
  padding-top: 10px;
}

.rdrMonthAndYearPickers{
  font-weight: 600;
}

.rdrMonthAndYearPickers select{
    -moz-appearance: none;
         appearance: none;
    -webkit-appearance: none;
    border: 0;
    background: transparent;
    padding: 10px 30px 10px 10px;
    border-radius: 4px;
    outline: 0;
    color: #3e484f;
    background: url("data:image/svg+xml;utf8,<svg width='9px' height='6px' viewBox='0 0 9 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(-636.000000, -171.000000)' fill-opacity='0.368716033'><g id='input' transform='translate(172.000000, 37.000000)' fill='%230E242F' fill-rule='nonzero'><g id='Group-9' transform='translate(323.000000, 127.000000)'><path d='M142.280245,7.23952813 C141.987305,6.92353472 141.512432,6.92361662 141.219585,7.23971106 C140.926739,7.5558055 140.926815,8.06821394 141.219755,8.38420735 L145.498801,13 L149.780245,8.38162071 C150.073185,8.0656273 150.073261,7.55321886 149.780415,7.23712442 C149.487568,6.92102998 149.012695,6.92094808 148.719755,7.23694149 L145.498801,10.7113732 L142.280245,7.23952813 Z' id='arrow'></path></g></g></g></svg>") no-repeat;
    background-position: right 8px center;
    cursor: pointer;
    text-align: center
  }

.rdrMonthAndYearPickers select:hover{
      background-color: rgba(0,0,0,0.07);
    }

.rdrMonthPicker, .rdrYearPicker{
  margin: 0 5px
}

.rdrNextPrevButton {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 0.833em;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: #EFF2F7
}

.rdrNextPrevButton:hover{
    background: #E1E7F0;
  }

.rdrNextPrevButton i {
    display: block;
    width: 0;
    height: 0;
    padding: 0;
    text-align: center;
    border-style: solid;
    margin: auto;
    transform: translate(-3px, 0px);
  }

.rdrPprevButton i {
    border-width: 4px 6px 4px 4px;
    border-color: transparent rgb(52, 73, 94) transparent transparent;
    transform: translate(-3px, 0px);
  }

.rdrNextButton i {
    margin: 0 0 0 7px;
    border-width: 4px 4px 4px 6px;
    border-color: transparent transparent transparent rgb(52, 73, 94);
    transform: translate(3px, 0px);
  }

.rdrWeekDays {
  padding: 0 0.833em;
}

.rdrMonth{
  padding: 0 0.833em 1.666em 0.833em;
}

.rdrMonth .rdrWeekDays {
    padding: 0;
  }

.rdrMonths.rdrMonthsVertical .rdrMonth:first-child .rdrMonthName{
  display: none;
}

.rdrWeekDay {
  font-weight: 400;
  line-height: 2.667em;
  color: rgb(132, 144, 149);
}

.rdrDay {
  background: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 0;
  padding: 0;
  line-height: 3.000em;
  height: 3.000em;
  text-align: center;
  color: #1d2429
}

.rdrDay:focus {
    outline: 0;
  }

.rdrDayNumber {
  outline: 0;
  font-weight: 300;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  top: 5px;
  bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rdrDayToday .rdrDayNumber span{
  font-weight: 500
}

.rdrDayToday .rdrDayNumber span:after{
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: #3d91ff;
  }

.rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after{
      background: #fff;
    }

.rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{
          color: rgba(255, 255, 255, 0.85);
        }

.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{
  background: currentColor;
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  bottom: 5px;
}

.rdrSelected{
  left: 2px;
  right: 2px;
}

.rdrInRange{}

.rdrStartEdge{
  border-top-left-radius: 1.042em;
  border-bottom-left-radius: 1.042em;
  left: 2px;
}

.rdrEndEdge{
  border-top-right-radius: 1.042em;
  border-bottom-right-radius: 1.042em;
  right: 2px;
}

.rdrSelected{
  border-radius: 1.042em;
}

.rdrDayStartOfMonth .rdrInRange, .rdrDayStartOfMonth .rdrEndEdge, .rdrDayStartOfWeek .rdrInRange, .rdrDayStartOfWeek .rdrEndEdge{
    border-top-left-radius: 1.042em;
    border-bottom-left-radius: 1.042em;
    left: 2px;
  }

.rdrDayEndOfMonth .rdrInRange,  .rdrDayEndOfMonth .rdrStartEdge,  .rdrDayEndOfWeek .rdrInRange,  .rdrDayEndOfWeek .rdrStartEdge{
    border-top-right-radius: 1.042em;
    border-bottom-right-radius: 1.042em;
    right: 2px;
  }

.rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
    border-top-left-radius: 1.333em;
    border-bottom-left-radius: 1.333em;
    border-left-width: 1px;
    left: 0px;
  }

.rdrDayEndOfMonth .rdrDayInPreview, .rdrDayEndOfMonth .rdrDayStartPreview, .rdrDayEndOfWeek .rdrDayInPreview, .rdrDayEndOfWeek .rdrDayStartPreview{
   border-top-right-radius: 1.333em;
   border-bottom-right-radius: 1.333em;
   border-right-width: 1px;
   right: 0px;
 }

.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{
  background: rgba(255, 255, 255, 0.09);
  position: absolute;
  top: 3px;
  left: 0px;
  right: 0px;
  bottom: 3px;
  pointer-events: none;
  border: 0px solid currentColor;
  z-index: 1;
}

.rdrDayStartPreview{
  border-top-width: 1px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  border-top-left-radius: 1.333em;
  border-bottom-left-radius: 1.333em;
  left: 0px;
}

.rdrDayInPreview{
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.rdrDayEndPreview{
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-right-radius: 1.333em;
  border-bottom-right-radius: 1.333em;
  right: 2px;
  right: 0px;
}

.rdrDefinedRangesWrapper{
  font-size: 12px;
  width: 226px;
  border-right: solid 1px #eff2f7;
  background: #fff;
}

.rdrDefinedRangesWrapper .rdrStaticRangeSelected{
    color: currentColor;
    font-weight: 600;
  }

.rdrStaticRange{
  border: 0;
  cursor: pointer;
  display: block;
  outline: 0;
  border-bottom: 1px solid #eff2f7;
  padding: 0;
  background: #fff
}

.rdrStaticRange:hover .rdrStaticRangeLabel,.rdrStaticRange:focus .rdrStaticRangeLabel{
      background: #eff2f7;
    }

.rdrStaticRangeLabel{
  display: block;
  outline: 0;
  line-height: 18px;
  padding: 10px 20px;
  text-align: left;
}

.rdrInputRanges{
  padding: 10px 0;
}

.rdrInputRange{
  align-items: center;
  padding: 5px 20px;
}

.rdrInputRangeInput{
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  text-align: center;
  border: solid 1px rgb(222, 231, 235);
  margin-right: 10px;
  color: rgb(108, 118, 122)
}

.rdrInputRangeInput:focus, .rdrInputRangeInput:hover{
    border-color: rgb(180, 191, 196);
    outline: 0;
    color: #333;
  }

.rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after{
  content: '';
  border: 1px solid currentColor;
  border-radius: 1.333em;
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 0px;
  right: 0px;
  background: transparent;
}

.rdrDayPassive{
  pointer-events: none;
}

.rdrDayPassive .rdrDayNumber span{
    color: #d5dce0;
  }

.rdrDayPassive .rdrInRange, .rdrDayPassive .rdrStartEdge, .rdrDayPassive .rdrEndEdge, .rdrDayPassive .rdrSelected, .rdrDayPassive .rdrDayStartPreview, .rdrDayPassive .rdrDayInPreview, .rdrDayPassive .rdrDayEndPreview{
    display: none;
  }

.rdrDayDisabled {
  background-color: rgb(248, 248, 248);
}

.rdrDayDisabled .rdrDayNumber span{
    color: #aeb9bf;
  }

.rdrDayDisabled .rdrInRange, .rdrDayDisabled .rdrStartEdge, .rdrDayDisabled .rdrEndEdge, .rdrDayDisabled .rdrSelected, .rdrDayDisabled .rdrDayStartPreview, .rdrDayDisabled .rdrDayInPreview, .rdrDayDisabled .rdrDayEndPreview{
    filter: grayscale(100%) opacity(60%);
  }

.rdrMonthName{
  text-align: left;
  font-weight: 600;
  color: #849095;
  padding: 0.833em;
}

.bx-form-date-picker .dropdown_content {
    overflow: hidden;
}

.bx-form-date-picker .rdrDay {
    margin: 0px !important;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var now = new Date();
var format = new Intl.DateTimeFormat("es", {
  year: "numeric",
  month: "short",
  day: "numeric"
}).format;
function DatePickerRange({
  onChange,
  onChangeRange,
  range,
  date,
  ...dateRangeProps
}) {
  const [currentRange, setCurrentRange] = useState(range);
  useEffect(() => {
    if (range != currentRange)
      setCurrentRange(range);
  }, [range]);
  return /* @__PURE__ */ jsx("div", {
    className: "bx-form-date-picker",
    children: /* @__PURE__ */ jsx(Dropdown, {
      onChange: (show) => {
        if (!show && currentRange != range)
          onChange(currentRange);
      },
      content: /* @__PURE__ */ jsx(DateRange, {
        locale: es_default,
        date,
        showPreview: !date,
        ranges: date ? [
          {
            startDate: date,
            endDate: date,
            key: "range"
          }
        ] : [
          {
            ...currentRange,
            key: "range"
          }
        ],
        maxDate: now,
        onChange: ({ range: range2 }) => {
          setCurrentRange(range2);
          onChangeRange(range2);
        },
        showDateDisplay: false,
        ...dateRangeProps
      }),
      children: /* @__PURE__ */ jsxs("button", {
        className: "bx-form-input bx-form-input-button",
        children: [
          /* @__PURE__ */ jsx(Icon.Calendar, {
            size: "1em"
          }),
          /* @__PURE__ */ jsx("strong", {
            className: "bx-form-input-button_label",
            children: date ? format(date) : [range].map(({ startDate, endDate }) => {
              return [
                format(startDate),
                " - ",
                format(endDate)
              ];
            })
          }),
          /* @__PURE__ */ jsx(Icon.Down, {
            size: "1em",
            color: "lblue-well"
          })
        ]
      })
    })
  });
}
export {
  DatePickerRange
};
