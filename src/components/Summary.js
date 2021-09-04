import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
    text-transform: capitalize;
`;

const Summary = ({ summary }) => {
    const { brand, year, plan } = summary.data;

    if (brand === "" || year === "" || plan === "") {
        return null;
    }

    return (
        <SummaryContainer>
            <h2>Summary: </h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Year: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </SummaryContainer>
    );
};

Summary.propTypes = {
    summary: PropTypes.object.isRequired,
};

export default Summary;
