import { FC } from "react";
import { Button } from '@chakra-ui/react'

type BDPage ={
    pageChange: () => void;
}

export const BookDetailPage:FC<BDPage> = props => {
    const {pageChange} = props;

    return (
        <div>
            <Button colorScheme="teal" onClick={pageChange}>トップページへ</Button>
            <p>本詳細ページ予定地</p>
        </div>
    )
}