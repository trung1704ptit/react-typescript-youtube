type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === 'loading') {
    message = 'loading...'
  } else if (props.status === 'success') {
    message = 'Data feching successfully'
  } else if (props.status === 'error') {
    message = 'Data fetching error'
  }
  return <div>{message}</div>;
};
