import { Button } from "@material-ui/core";

function Header(
  {
    title,
    btnText,
    btnCreate
  }
) {
  const create = () => {
    console.log('=> Create')
  };

  return (
    <div className="flex items-center justify-between mb-3">
      <span className="text-md font-medium">
        {title}
      </span>
      <Button
        variant="contained"
        color="primary"
        className="btn btn--min-width"
        onClick={btnCreate}
      >
        + {btnText}
      </Button>
    </div>
  );
}

export default Header;
