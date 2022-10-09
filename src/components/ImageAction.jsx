import { Fragment, useState } from 'react'

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return [hovering, onHoverProps];
}

function myComponent() {
  const [buttonAIsHovering, buttonAHoverProps] = useHover();
  const [buttonBIsHovering, buttonBHoverProps] = useHover();

  return (
    <div>
      <Fragment  {...buttonAHoverProps}>
        {buttonAIsHovering ? "button A hovering" : "try hovering here"}
      </Fragment>
      <Fragment  {...buttonBHoverProps}>
        {buttonBIsHovering ? "button B hovering" : "try hovering here"}
      </Fragment>
    </div>
  );
}
