import github_picture from "./images_jb/github.png";

export function Footer() {
    return (
        <>
            <body id = "footer_body">
                <h2 id = "footer_subtitle">Qui sommes-nous?</h2>
                <div id = "footer_flex">
                    <img src = {github_picture} id = "footer_img"/>
                    <ul>
                        <li className = "footer_list"><a href = "https://github.com/ScrimaliAnthony" target ="_blank" className = "footer_hyper"><p>Scrimali Anthony</p></a></li>
                        <li className = "footer_list"><a href = "https://github.com/Pepilo" target ="_blank" className = "footer_hyper"><p>Piquemal-Perrin Loïck</p></a></li>
                    </ul>
                </div>
            </body>
        </>
    )
}