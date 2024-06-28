/** Functions */
import { SeoHead } from "@/components/atoms/SeoHead/SeoHead";
import HomeTemplate from "@/components/templates/HomeTemplate/HomeTemplate";

export default function Home() {
    return (
        <>
            <SeoHead title="Home of Timo Smit" />
            <HomeTemplate />
        </>
    );
}
