import { createFileRoute, Outlet } from "@tanstack/react-router"

/** Layout shell for /skills and /skills/$id */
export const Route = createFileRoute("/skills")({
  component: SkillsLayout,
})

function SkillsLayout() {
  return <Outlet />
}
