import { Button } from "../components/button"

export const IndexPage = () => (
  <main className="p-4">
    <h1 className="text-xl font-bold">Storybook + Tailwind 2 + PostCSS 8</h1>
    <div className="flex items-center space-x-4 mt-4">
      <Button size="lg" text="Large Button" />
      <Button size="md" text="Medium Button" />
      <Button size="sm" text="Small Button" />
    </div>
  </main>
)

export default IndexPage
