import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
    getYearDifference,
    getBrandIncrement,
    getPlanIncrement,
} from "../helper";

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color 0.2s ease;
    &:hover {
        background-color: #26c6da;
        transition: background-color 0.2s ease;
    }
`;

const Formular = ({ addSummary, changeLoading }) => {
    const [data, addData] = useState({
        brand: "",
        year: "",
        plan: "",
    });

    const [error, changeError] = useState(false);

    const { brand, year, plan } = data;

    const handleOnChange = (evt) => {
        addData({
            ...data,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
            changeError(true);
            return;
        }
        changeError(false);

        let result = 2000;

        result -= (getYearDifference(year) * 3 * result) / 100;

        result = result * getBrandIncrement(brand);

        result = parseFloat(result * getPlanIncrement(plan));

        changeLoading(true);

        setTimeout(() => {
            changeLoading(false);
            addSummary({
                total: result,
                data,
            });
        }, 3000);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error>Please select all fields</Error> : null}

            <Field>
                <Label>Car Brand:</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={(evt) => handleOnChange(evt)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label>Car Year:</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={(evt) => handleOnChange(evt)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan:</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={(evt) => handleOnChange(evt)}
                />
                Basic
                <InputRadio
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === "full"}
                    onChange={(evt) => handleOnChange(evt)}
                />
                Full
            </Field>
            <Button type="submit">Get Cost</Button>
        </form>
    );
};

Formular.propTypes = {
    addSummary: PropTypes.func.isRequired,
    changeLoading: PropTypes.func.isRequired,
};

export default Formular;
