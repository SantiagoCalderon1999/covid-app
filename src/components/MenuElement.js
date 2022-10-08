import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

/**
 * Creates a menu element
 * @returns JSX containing a button with a tooltip
 */
function MenuElement({ tooltipTitle, children }) {
  return (
    <Tooltip title={tooltipTitle} placement="top">
      <Button color="inherit">{children}</Button>
    </Tooltip>
  );
}

export default MenuElement;
