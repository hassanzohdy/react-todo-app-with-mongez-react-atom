import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";

export default function parseError(error: any) {
  if (Is.empty(error)) {
    return Is.object(error) ? <span>{trans("somethingWentWrong")}</span> : null;
  }

  if (error.response) {
    error = error.response;
  }

  if ([405, 500, 401].includes(error.status)) {
    return <span>{trans("somethingWentWrong")}</span>;
  }

  if (error.status === 404) {
    return <span>{trans("notFound")}</span>;
  }

  if (error?.data?.errors) {
    error = error.data.errors;
  }

  if (error?.data?.error) {
    error = error.data.error;
  }

  let errorContent: any;

  if (Is.array(error)) {
    errorContent = error.map((error: any) => {
      if (error.value) {
        return <div key={error.key}>{error.value}</div>;
      }

      return error;
    });
  } else {
    errorContent = <div>{error}</div>;
  }

  return errorContent;
}
