export function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId)

  if (element) {
    // Prevent default anchor link behavior
    window.history.pushState({}, "", `#${elementId}`)

    // Smooth scroll to element
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
