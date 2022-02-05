exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/sample-page",
    component: require.resolve("./src/templates/sample-page.js"),
    context: {},
    defer: true,
  })
}
