export default function MyHeader({ html }) {
  return html`
    <header>
      <my-link href="/about">ok</my-link>
      <hello-world greeting="change"></hello-world>
    </header>
  `
}
