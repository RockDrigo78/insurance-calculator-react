import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const SummaryResult = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Summary = styled.span`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ summary }) => {
    return summary.total === 0 ? (
        <Message>Choose brand, year and plan</Message>
    ) : (
        <SummaryResult>
            <TransitionGroup component="span" className="resultado">
                <CSSTransition
                    classNames="resultado"
                    key={summary.total}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <Summary>Total: ${summary.total}</Summary>
                </CSSTransition>
            </TransitionGroup>
        </SummaryResult>
    );
};

Result.proptypes = {
    summary: PropTypes.number.isRequired,
};

export default Result;
