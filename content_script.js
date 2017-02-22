var explore_node = document.createElement("li");
explore_node.setAttribute("class", "header-nav-item");

var explore_url =  document.createElement("a");
explore_url.setAttribute("href", "/explore");
explore_url.setAttribute("aria-label", "Explore");
explore_url.setAttribute("class", "js-selected-navigation-item header-nav-link");

var explore_text = document.createTextNode("Explore");

explore_url.appendChild(explore_text);
explore_node.appendChild(explore_url);

var header = document.getElementsByClassName("header-nav")

if (header.length > 0) {
	header[0].appendChild(explore_node);
}