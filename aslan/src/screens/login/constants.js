import { Typography } from "antd";
import { formUIElements } from "../../utils/constants";

const { Link } = Typography;

export const loginForm = {
   items: [
      {
         formItemAttributes: {
            name: "username",
            label: "Email ID",
            rules: [
               {
                  required: true,
                  type: "email",
               },
            ],
            style: {
               col: 24,
            },
         },

         uiElement: {
            type: formUIElements.INPUT.DEFAULT,
            error: "abcfd",
            attributes: {
               placeholder: "Enter your Email here",
               size: "large",
               style: { height: "2.68rem" },
            },
         },
      },

      {
         formItemAttributes: {
            name: "password",
            label: (
               <span
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     width: "100vw",
                  }}
               >
                  <span>Password</span>{" "}
                  <Link
                     href="/forgot-password"
                     style={{
                        fontSize: "0.75rem",
                        textAlign: "end",
                        fontWeight: 100,
                        marginBottom: 4,
                     }}
                     tabIndex="-1"
                  >
                     Forgot password?
                  </Link>
               </span>
            ),
            rules: [
               {
                  required: true,
                  message: "Password is required!",
               },
            ],
            style: {
               col: 24,
            },
         },
         uiElement: {
            type: formUIElements.INPUT.PASSWORD,
            attributes: {
               placeholder: "Enter your password here",
               size: "large",
               style: { height: "2.68rem" },
            },
         },
      },
   ],

   submitButton: {
      label: "Log In",
      size: "large",
      style: { width: "100%", height: "2.81rem", marginTop: "1.25rem", col: 24 },
   },
};
