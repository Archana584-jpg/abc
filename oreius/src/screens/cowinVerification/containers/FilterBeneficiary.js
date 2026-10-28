import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../../utils/helper';
import { downloadCowinCertificate } from '../actions';
import { FilterBeneficiaryComponent } from '../components'

const FilterBeneficiary = ({ handleFilterBeneficiaryModal }) => {

    const [filterType, setFilterType] = useState('beneficiaryId')
    const dispatch = useDispatch();
    const generateOtpData = useSelector((state) => state.cowinVerification.generateOtpData.data);

    const onSubmitForm = (value) => {
        const data = {
            transaction_id: (generateOtpData || {}).transaction_id,
            ...value,
        };
        if (value.year_of_birth) data['year_of_birth'] = formatDate(value.year_of_birth, "YYYY")
        dispatch(downloadCowinCertificate(data));
        handleFilterBeneficiaryModal(false)
    };

    return (
        <FilterBeneficiaryComponent
            onSubmitForm={onSubmitForm}
            filterType={filterType}
            handleFilterType={e => setFilterType(e.target.value)}
        />
    )
}

export default FilterBeneficiary