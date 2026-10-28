# 🚀 Journey Engine

A dynamic, config-driven React engine to build and render form-based journeys with ease.

---

## 📦 Layouts

The application is structured with two main layouts:

-  **🔐 Private Layout:** For authorized users.  
   Includes a **Sidebar** and **Route-based components**.

-  **🔓 Public Layout:** For unauthorized users.  
   Displays the **Login Form**.

---

## 🔍 Private Layout Details

-  Application details are fetched using the `applicationId`.
-  The **Sidebar** displays a list of nodes for the journey, based on data received in `applicationData`.
-  Routes are defined to navigate across the journey.  
   For now, there is a single route which renders the **Node**.

---

## 🧱 Node Structure

Each **Node** is a self-contained unit responsible for rendering a part of the journey.  
The structure looks like this:

-  **Node:**  
   Wrapped with `FormManagerContext` to handle form references and actions centrally.

   -  **Layout:**  
      A wrapper that filters out components based on their visibility.

      -  **Content:**  
         Acts as a component wrapper that:
         -  Manages data for the component.
         -  Uses `renderComponent` to render the component dynamically.

---

## 📤 Passing Data to Components

Data is managed in `Node -> Container -> Content.js`.

We use a `dataSource` config object to define where the data should come from (typically from `genericData` inside `applicationData`).

### Example:

```js
applicationData: {
  data: {
    genericData: {
      business_pan_number: "XXXXXXXXXX09",
      bank_verification_upload_type: "second",
      second_pan_number: "XXXXXXXX08"
    }
  }
}
```

To pass `business_pan_number` to a component:

```js
dataSource: {
   onValidCondition: "business_pan_number";
}
```

If conditional logic is needed:

```js
dataSource: {
  conditions: [
    {
      dependOn: "bank_verification_upload_type",
      operator: "EQUALS",
      value: "second"
    }
  ],
  onValidCondition: "business_pan_number",
  onInvalidCondition: "second_pan_number"
}
```

> If no conditions are provided, `onValidCondition` is used by default.

---

## 🧩 Component Rendering

Rendering begins from the `renderComponent` function located in `shared/helpers`.

### For non-form components:

-  Config is transformed into component props.
-  Props are then passed to the component.

### For form components:

Forms follow a hierarchical structure:

```
Form
  └── FormItem
        └── Field

OR for repeatable fields:

Form
  └── FormList
        └── FormItem
              └── Field
```

#### Workflow:

1. Start from `renderComponent`.
2. Use `configToComponentProps` to derive props for the Form.
3. Add Form to DOM.
4. Iterate over fields:

   -  If **repeatable**, wrap with `FormList` and use `renderField`.
   -  If **not repeatable**, directly use `renderField`.

5. `renderField`:
   -  Derives props from config.
   -  Wraps the field in a `FormItem`.
   -  Renders the field.

---

## ⚙️ Handling Component Actions

Actions are handled using a **generic `actionHandler`**, defined at the **Node level**.

### Key Features:

-  Centralized action execution.
-  Can retrieve form data using `formId` from `FormManagerContext`.
-  Actions supported:
   -  API Calls
   -  State Updates

> To enable this, ensure the `formId` is defined in the form config.

### Action mapping:

Each actionable component defines its own actions and handler mappings during config-to-props transformation.

---

## 🧠 State Management

### 1. **Shared State** (global to the engine):

-  `tokens`
-  `applicationData`
-  `modalVisibility` — Controls visibility of modal components in the view.
-  `sessionExpiryModal` — Tracks session expiry modal visibility.

### 2. **Node-Level State** (specific to the active Node):

-  `documents` — Stores uploaded/downloaded docs for use in the `ImageViewer`.
-  `actionExecuted` — Tracks recently executed action.

---

## 🧪 Demo Component Configs

You can find example configs for components under:

```
assets/sample/components
```

---

## 🧰 Making Changes to Components or Config

If you want to add new props/config to a component:

1. Update the **component**.
2. Modify `configToComponentProps`.
3. (Optionally) Update `renderComponent` if necessary.

> This is required because props and data destructuring happen during the config-to-props transformation phase.

---

## 🔑 Key Utility Functions & Constants

### `shared/helpers.js`

-  `renderComponent` — Renders any component from config.
-  `renderField` — Renders form fields.
-  `configToComponentProps` — Converts config to component props.

### `utils/helper.js`

-  `actionHandler` — Executes actions on defined events.
-  `actionMapper` — Maps event names to handler functions.
-  `getEvaluatedValue` — Evaluates data based on `dataSource` and conditions.

### `utils/constants.js`

-  `operatorFunctions` — Executes value comparison operations.
-  `operatorMaps` — Maps operator names.
-  `logicalOperatorMaps` — AND / OR logical mapping.
-  `logicalOperatorFunctions` — Logical comparison between conditions.

---

## 🧑‍💻 Running the Project Locally

Follow these steps to run the project on your local machine:

### 1. Prerequisites

-  Install **Node.js**
-  Install **Yarn**

### 2. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 3. Install Dependencies

```bash
yarn install
```

### 4. Start the Development Server

```bash
yarn start
```

Visit the app at:  
📍 `http://localhost:3000`
