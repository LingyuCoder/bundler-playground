import useForm from "rc-form-hooks";

const ClueForm = React.forwardRef((props, ref) => {
  const form = useForm();
  console.log(form);
});
const Root = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Provider, { children: /* @__PURE__ */ jsx(ClueForm, __spreadProps(__spreadValues({}, props), { ref })) }));
var Form_default = React.memo(Root);
export {
  Form_default as default
};
