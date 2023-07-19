export const renderSwitcth = (category) => {
  let title = "Filmes"
  switch(category) {
    case "top_rated":
      return title = "Melhores filmes"
    case "popular":
      return title = "Filmes populares"
    case "upcoming":
      return title = "Filmes recentes"
    case "now_playing":
      return title = "Filmes em cataz"
    default:
      return title
  }
}