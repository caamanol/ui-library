import { createTheme, alpha } from '@mui/material/styles';

// Background scale tokens provided (0 = lightest, 100 = darkest)
const bg = {
  0: 'var(--Color-Valor-0, #FFFFFF)',
  15: 'var(--Color-Valor-15, #F7FAFF)',
  25: 'var(--Color-Valor-25, #97A7C7)',
  50: 'var(--Color-Valor-50, #35527A)',
  75: 'var(--Color-Valor-75, #14253B)',
  100: 'var(--Color-Valor-100, #08121F)',
};

// Colors pulled from Figma styles
const figma = {
  // Colors
  buttonPrimaryBg: '#047d95',
  buttonPrimaryFg: '#ffffff',
  brandPrimary60: '#40aabf',
  textPrimary: '#0d1a26',
  textSecondary: '#304050',
  textTertiary: '#5c6670',
  neutral40: '#dcdee0',
  labelColor: '#304050', // components/field/label/color
  fieldPlaceholder: '#808080', // components/fieldcontrol/placeholder/color
  fieldBorder: '#89949f', // components/fieldcontrol/borderColor
  backgroundPrimary: '#ffffff',
};

// Primary button state colors provided by user (light mode defaults)
const primaryStates = {
  main: '#233E6B',    // active/primary
  hover: '#35527A',   // hover
  disabled: '#97A7C7' // disabled
};

const brand = {
  primary: figma.buttonPrimaryBg,
  secondary: figma.brandPrimary60,
};

const componentsCommon = {
  MuiButton: {
    defaultProps: { size: 'medium' },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
      }),
      containedPrimary: {
        backgroundColor: primaryStates.main,
        color: '#ffffff',
        '&:hover': {
          backgroundColor: primaryStates.hover,
        },
        '&.Mui-disabled': {
          backgroundColor: primaryStates.disabled,
          color: '#ffffff',
        },
      },
      outlinedPrimary: {
        color: primaryStates.main,
        borderColor: primaryStates.main,
        '&:hover': {
          backgroundColor: primaryStates.hover,
          borderColor: primaryStates.hover,
          color: '#ffffff',
        },
        '&.Mui-disabled': {
          borderColor: primaryStates.disabled,
          color: primaryStates.disabled,
        },
      },
      textPrimary: {
        color: primaryStates.main,
        '&:hover': {
          backgroundColor: primaryStates.hover,
          color: '#ffffff',
        },
        '&.Mui-disabled': {
          color: primaryStates.disabled,
        },
      },
      startIcon: { marginLeft: -4, marginRight: 16 },
      endIcon: { marginRight: -4, marginLeft: 16 },
    },
    variants: [
      {
        props: { variant: 'contained' },
        style: {
          width: 300,
          height: 42,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 33,
          paddingRight: 33,
          gap: 16,
        },
      },
      {
        props: { variant: 'contained', disabled: true },
        style: {
          width: 300,
          height: 42,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 33,
          paddingRight: 33,
          gap: 16,
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          width: 300,
          height: 42,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 33,
          paddingRight: 33,
          gap: 16,
        },
      },
      {
        props: { variant: 'outlined', disabled: true },
        style: {
          width: 300,
          height: 42,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 33,
          paddingRight: 33,
          gap: 16,
        },
      },
      {
        props: { variant: 'text' },
        style: {
          width: 300,
          height: 42,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 33,
          paddingRight: 33,
          gap: 16,
        },
      },
      {
        props: { variant: 'text', disabled: true },
        style: {
          width: 300,
          height: 42,
          borderRadius: 8,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 33,
          paddingRight: 33,
          gap: 16,
        },
      },
    ],
  },
  MuiCard: {
    defaultProps: { elevation: 1 },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 12,
        border: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      rounded: { borderRadius: 12 },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: { borderRadius: 10 },
      notchedOutline: { borderColor: figma.fieldBorder },
      input: { paddingTop: 10, paddingBottom: 10, '::placeholder': { color: figma.fieldPlaceholder, opacity: 1 } },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: { color: figma.labelColor },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: { color: figma.labelColor },
    },
  },
  MuiNativeSelect: {
    styleOverrides: {
      select: { color: figma.textPrimary },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? bg[75] : bg[15],
        '& .MuiTableCell-root': { fontWeight: 600 },
      }),
    },
  },
  MuiChip: {
    defaultProps: { size: 'small' },
    styleOverrides: {
      root: { borderRadius: 8 },
      label: { fontFamily: 'Inter', fontWeight: 600, fontSize: 12 },
    },
  },
  MuiDialog: {
    styleOverrides: { paper: { borderRadius: 12 } },
  },
};

// Shadows mapped from Figma EFFECTS (S-1, S-2)
const shadows = Array(25).fill('none');
shadows[1] = '4px 4px 18px -8px rgba(8, 18, 31, 0.10)';
shadows[2] = '4px 4px 18px -4px rgba(8, 18, 31, 0.20)';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: primaryStates.main, contrastText: '#ffffff' },
    secondary: { main: brand.secondary },
    background: { default: bg[15], paper: bg[0] },
    text: { primary: figma.textPrimary, secondary: figma.textSecondary },
    divider: figma.neutral40,
  },
  shape: { borderRadius: 12 },
  typography: {
    // Default to Inter for body; override headings with Open Sans Bold per Figma
    fontFamily: `Inter, "Open Sans", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"`,
    h1: { fontFamily: '"Open Sans"', fontWeight: 700, fontSize: 48, lineHeight: 65.37/48 },
    h2: { fontFamily: '"Open Sans"', fontWeight: 700, fontSize: 32, lineHeight: 43.58/32 },
    h3: { fontFamily: '"Open Sans"', fontWeight: 700, fontSize: 24, lineHeight: 32.68/24 },
    h4: { fontFamily: '"Open Sans"', fontWeight: 700, fontSize: 18, lineHeight: 24.51/18 },
    h5: { fontFamily: 'Inter', fontWeight: 600, fontSize: 16, lineHeight: 24/16 },
    h6: { fontFamily: 'Inter', fontWeight: 600, fontSize: 14, lineHeight: 20/14 },
    body1: { fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: 24/16, letterSpacing: '0.16px' },
    body2: { fontFamily: '"Open Sans"', fontWeight: 400, fontSize: 14, lineHeight: 19.07/14 },
    button: { fontFamily: 'Inter', fontWeight: 700, fontSize: 16, lineHeight: 24/16 },
    subtitle1: { fontFamily: 'Inter', fontWeight: 400, fontSize: 20, lineHeight: 30/20 },
  },
  components: componentsCommon,
  shadows,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: primaryStates.main },
    secondary: { main: brand.secondary },
    background: { default: bg[100], paper: bg[75] },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: `"Open Sans", Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"`,
    h4: { fontFamily: '"Open Sans"', fontWeight: 700, fontSize: '36px', lineHeight: 1, letterSpacing: 0 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600 },
  },
  components: componentsCommon,
  shadows,
});
