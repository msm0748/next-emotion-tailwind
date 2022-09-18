import Head from "next/head";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";

const StyledForm = styled.div`
    ${tw`flex flex-col h-screen justify-center items-center bg-gray-100`}
    & {
        form {
            ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
        }
        input {
            ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
        }
        button {
            ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
        }
    }
`;

export default function Home() {
    return (
        <div>
            <StyledForm>
                <form>
                    <input type="text" placeholder="Full name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button>Sign In</button>
                </form>
            </StyledForm>
        </div>
    );
}
