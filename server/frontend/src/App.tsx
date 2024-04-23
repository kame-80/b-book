import { FC, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { TopPage } from "./routes/TopPage";
import { BookDetailPage } from "./routes/BookDetailPage";

export const App:FC = () =>{
    const [isAdmin, setIsAdmin] = useState(true);

    const pageChange = () => {
        setIsAdmin(!isAdmin)
    };

    return(
        <ChakraProvider>
            {isAdmin ? <TopPage pageChange={pageChange}/> : <BookDetailPage pageChange={pageChange}/>}
        </ChakraProvider>
    );
};