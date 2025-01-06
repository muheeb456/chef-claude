import chef_image from "../assets/chef-img.png";
export default function Header() {
    return (
        <header className="header">
            <img src={chef_image} className={"logo"} alt="chef logo"/>
            <h1 className={"title"}>AI Chef</h1>
        </header>
    );
}