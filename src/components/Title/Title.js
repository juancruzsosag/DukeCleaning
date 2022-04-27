import Helmet from "react-helmet"
import OpenGraphLogo from "../../assets/images/openGraphIcon.png"

export const Title = () => {

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>The Duke Rey Cleaning</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="og:title" content="The Duke Rey Cleaning" data-react-helmet="true" />
            <meta name="og:description" content="The best commercial cleaning services in Miami
            We focus on the cleaning of kitchens, restaurants and reatils stores." data-react-helmet="true" />
            <meta name="og:image" href={OpenGraphLogo} data-react-helmet="true" />
        </Helmet>

    )

}