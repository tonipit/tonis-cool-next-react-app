import { PropsWithChildren } from 'react';
import Navbar from './components/nav/navbar';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function Layout({ children }: PropsWithChildren) {
    // throw new Error('lol error');

    return (
        <div className="flex max-h-screen h-screen">
            <Navbar></Navbar>
            <main className="overflow-auto flex flex-1 p-5">{children}</main>

            {/* <html lang="en">
            <body>
                <Navbar></Navbar>
            </body>
            </html> */}
        </div>
    );
}
