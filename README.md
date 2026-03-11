- **Individual consultations**: You can contact Julia Kostiuk for individual
  consultations, where she works with you one on one, helping unlock your
  potential and understand your own needs and desires.

- **Psychotherapeutic support**: Regardless of whether you are facing stress,
  anxiety, depression or relationship problems, Julia will provide you effective
  and caring psychotherapeutic support.

- **Group Sessions**: If you want a more group dynamic, you can to join group
  sessions, where Julia conducts various trainings and seminars.

---

## 🗂️ Project description 🗂️

A website for the Psychologist Yulia Kostiuk.

- **Project name**: psychologist-yulia-kostyuk

## ⚙️ Creating the project ⚙️

This project is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   `git clone https://github.com/SoftRyzen-internship/psychologist-yulia-kostyuk.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser (Note:
   the port may be changed if 3000 port is occupied by another website).

## Technologies Used

1. **Next.js:** is a robust React framework designed for building modern and
   scalable web applications. It simplifies the development process by providing
   a structured architecture, server-side rendering, and efficient routing.

2. **Tailwind CSS:** is a utility-first CSS framework that significantly
   expedites the process of designing and styling web interfaces. The
   framework's modular and configurable nature aligns seamlessly with modern web
   development practices.

3. **Swiper:** is a cutting-edge, mobile-friendly touch slider that enhances
   website with hardware-accelerated transitions and remarkable native behavior.
   The slider component becomes a key element in providing users with an
   immersive and interactive experience as they explore the various sections of
   the site.

4. **TypeScript:** is a strict syntactical superset of JavaScript, introducing
   optional static typing to the project. The optional static typing provides
   additional clarity and documentation for the codebase, contributing to the
   overall maintainability of the CarpTravel website.

5. **React Hook Form:** is a library for managing form state in React
   applications. It simplifies the process of building forms by providing a
   flexible and efficient way to handle form validation, submission, and state
   management. With React Hook Form, our website's forms are highly performant
   and easy to maintain, ensuring a smooth user experience.

6. **Sanity:** is a headless CMS (Content Management System) that offers a
   highly customizable and intuitive interface for managing content. With
   Sanity, content creators can easily add, edit, and organize content, while
   developers benefit from its flexible API and powerful features such as
   real-time collaboration and structured content models. Integrating Sanity
   into our website allows us to maintain and update content seamlessly,
   ensuring that our site remains dynamic and up-to-date with minimal effort.

### Features

- **Optimization**: The website is optimized for fast loading, providing users
  with quick access to information.
- **Modularity and reusability**: The product is built using a component
  approach, which makes the code modular and allows components to be used on
  different pages and in different sections of the project. This simplifies the
  maintenance of the site and the expansion of its functionality.
- **Linters and formatting**: Using tools like Prettier and ESLint helps
  maintain code standards, ensures a consistent style, and identifies potential
  problems in the code.
- **Adaptability**: The website is responsive, allowing you to create dynamic
  and interactive user interfaces without reloading pages. This increases user
  engagement and interaction.
- **Convenient content management**: The content management system has an
  intuitive interface that simplifies the process of updating and editing
  content. You can easily make changes to texts, images and other content
  without special knowledge in web development.
- **Accessibility**:
  - Intuitive design
  - Semantic HTML
  - Mobile-friendly interface
  - Web resource available for any internet connection

### Design

[Design layout on Figma](<https://www.figma.com/file/0jRQbr4RWvSRsL3UK2D6AV/Psychologist-(Yulia-Kostyuk)>)

```

|-- public -> static files
|-- src -> source directory with the main application code
  |-- actions -> asynchronous functions that are executed on the server
  |-- app -> pages and routing
    |-- / --> routing group for main UI
    |-- (admin) --> routing for sanity CMS
  |-- components -> folder with reusable components
    |-- common -> base sections/block components (accordion, form, slider, etc.)
    |-- ui -> small reusable components (button, modal, etc.)
      |-- NameComponent -> folders for each component
        |-- NameComponent.tsx -> main component
        |-- NameComponent.module.css -> file for special components styles
        |-- index.ts -> file for re-export
        |-- NameComponent.types.ts -> file for special components types (props)
  |-- layout -> components that are used as a main template (header, footer)
      |-- NameLayout -> folders for each component layout
        |-- NameLayout.tsx -> main component layout
        |-- NameLayout.module.css -> file for special components layout styles
        |-- index.ts -> file for re-export
        |-- NameLayout.types.ts -> file for special components layout types(props)
  |-- sections -> folder with section components
      |-- NameComponent -> folders for each component section
        |-- NameComponent.tsx -> main component section
        |-- NameComponent.module.css -> file for special section components styles
        |-- index.ts -> file for re-export
        |-- NameComponent.types.ts -> file for special section components types(props)
  |-- data -> static data for the project (json)
  |-- types -> folder with reusable type definitions
  |-- utils -> additional reusable functions

```

</details>

### Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

<details>

<summary><b>Base sections/block components (accordion, form, slider, etc.): </b></summary>

<br/>

- #### component Logo

| Prop        | Default | Description                                                         |
| ----------- | ------- | ------------------------------------------------------------------- |
| `path`      | --      | required, `string`. choose 'header' or 'footer'                     |
| `onClick`   | --      | optional, `() => void`, add the function of closing the mobile-menu |
| `className` | --      | optional, `string`, adds custom css class to the Logo               |

- #### component Socials

| Prop        | Default | Description                                              |
| ----------- | ------- | -------------------------------------------------------- |
| `className` | --      | optional, `string`, adds custom css class to the Socials |

- #### component Button

| Prop         | Default     | Description                                                                  |
| ------------ | ----------- | ---------------------------------------------------------------------------- |
| `tag`        | --          | required, `string`, it can be either an 'a' or a 'button'.                   |
| `accent`     | --          | required, `boolean`, should button have an accent style or not.              |
| `children`   | --          | required, `ReactNode`                                                        |
| `href`       | `undefined` | optional, `string`, specifies the URL of the link.                           |
| `buttonType` | `button`    | optional, `string`, specifies the type of button.                            |
| `onClick`    | `undefined` | optional, `() => void`, function is called when the button is clicked.       |
| `disabled`   | `false`     | optional, `string`, if 'true', the button is disabled and cannot be clicked. |
| `classname`  | `undefined` | optional, `string`, adds custom css class to the Button component.           |

- #### component Navbar

| Prop        | Default     | Description                                                            |
| ----------- | ----------- | ---------------------------------------------------------------------- |
| `variant`   | --          | required, `string`, it can be either 'header' or 'mobile-menu'.        |
| `className` | `undefined` | optional, `string`, adds custom CSS classes to the Navbar component.   |
| `onclick`   | `undefined` | optional, `() => void`, function is called when the Navbar is clicked. |

- #### component NavbarLink

| Prop      | Default     | Description                                                                |
| --------- | ----------- | -------------------------------------------------------------------------- |
| `title`   | --          | required, `string`, specifies the title of the NavbarLink.                 |
| `href`    | --          | required, `string`, specifies the URL of the link.                         |
| `variant` | --          | required, `string`, specifies the variant of the NavbarLink.               |
| `onclick` | `undefined` | optional, `() => void`, function is called when the NavbarLink is clicked. |

- #### component BurgerMenu

| Prop      | Default | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| `onClose` | --      | required, `() => void`, add the function of closing the modal |
| `isOpen ` | --      | required, `boolean`, enables focus trap on opened burger menu |

- #### component Notification

| Prop   | Default | Description                                       |
| ------ | ------- | ------------------------------------------------- |
| `type` | --      | required, `sucess`, `error`, type of notification |

- #### component Modal

| Prop        | Default | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| `onClose`   | --      | required, `() => void`, add the function of closing the modal |
| `children`  | --      | optional, `React.ReactNode`, React components                 |
| `className` | --      | optional, `string`, adds custom css class to the Modal        |

- #### component FooterItem

| Prop    | Default | Description                                                  |
| ------- | ------- | ------------------------------------------------------------ |
| `name`  | --      | required, `string`, specifies the name of the FooterItem.    |
| `href`  | --      | required, `string`, specifies the URL of the link.           |
| `ariaL` | --      | required, `string`, adds custom aria-label to the FooterItem |

- #### component FormInput

| Prop       | Default | Description                                                                       |
| ---------- | ------- | --------------------------------------------------------------------------------- |
| `config`   | --      | required, `FormInputsConfig`, config props - name, label, placeholder, validation |
| `textarea` | --      | required, `boolean`, specifies if component input or textarea                     |
| `register` | --      | required, `UseFormRegister`, register an input element and apply validation rules |
| `errors`   | --      | optional, `object`, contains inputs' errors data                                  |

- #### component Checkbox

| Prop            | Default | Description                                                                       |
| --------------- | ------- | --------------------------------------------------------------------------------- |
| `register`      | --      | required, `UseFormRegister`, register an input element and apply validation rules |
| `errors`        | --      | optional, `object`, contains inputs' errors data                                  |
| `checkboxInput` | --      | optional, `string`                                                                |

- #### component ModalPolicy

| Prop      | Default | Description                                                |
| --------- | ------- | ---------------------------------------------------------- |
| `nameBtn` | --      | required, `string`, adds name of button in the ModalPolicy |
| `variant` | --      | required, `string`, it can be either 'form' or 'footer'    |
