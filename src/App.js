import React, { useState } from "react";
import Header from "./components/Header";
import Formular from "./components/Formular";
import Summary from "./components/Summary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import styled from "@emotion/styled";

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const FormularContainer = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

function App() {
    const [summary, addSummary] = useState({
        total: 0,
        data: {
            brand: "",
            year: "",
            plan: "",
        },
    });

    const [loading, changeLoading] = useState(false);

    return (
        <Container>
            <Header title="Insurance calculator" />
            <FormularContainer>
                <Formular
                    addSummary={addSummary}
                    changeLoading={changeLoading}
                />
                {!loading ? <Summary summary={summary} /> : null}
                {loading ? (
                    <SpinnerContainer>
                        <Spinner />
                    </SpinnerContainer>
                ) : null}
                <Result summary={summary} />
            </FormularContainer>
        </Container>
    );
}

export default App;
