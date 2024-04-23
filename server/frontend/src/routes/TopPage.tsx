import { FC } from "react";
import { BookCard } from "../components/BookCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Fotter";

type TPage = {
    pageChange: () => void
}

export const TopPage:FC<TPage> = props => {
    const {pageChange} = props;


    return (
        <div>
            <Header title={"b-book"}/>
            

            <div onClick={pageChange}>
                <BookCard title={"応用技術者試験"} progressE={70} progressY={40}
                url={"https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG2E-Sg2-7FDTZANwvnBP0L8fCu8JH5BxSVL3lAhv-sls980LyTBwij5eZ-KtpnfkCWznqSE7-NilOFFtsJMmZi6GuzRh6i4HbHDI9mVv807cp2Y1pw_v133JUF3TjN_9Lm2Xw_0PQSkfzIuIKFTsAuM6tpYE3y6hs06sNd58mrNrkfF4NIkZbUcFWALS26FK_w==/51nnvvdSTOL._SL500_.jpg?errorImage=false"} />
            </div>

            <Footer/>            
        </div>
    )
}