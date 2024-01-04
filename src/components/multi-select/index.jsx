import PropTypes from 'prop-types';
import Select from 'react-select';
import { ErrorMessage, Field } from 'formik';

export default function MultiSelect({ label, name, variant, isValidation, options, setFieldValue, ...props }){
    const handleChange = (selectedOptions) => {
        setFieldValue(name, selectedOptions);
    };

    return (
        <>
            {label && (
                <div className="block pb-3 font-body font-medium text-primary dark:text-white">{label}</div>
            )}
            <Field name={name}>
                {({ field }) => (
                    <Select
                        {...field}
                        isMulti
                        className={`w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary ${
                            variant === 'large' ? 'dark:border-secondary sm:w-1/2' : ''
                        }`}
                        options={options}
                        onChange={handleChange}
                        value={field.value}
                        {...props}
                    />
                )}
            </Field>
            {isValidation && (
                <ErrorMessage component="small" name={name} className="text-xs text-red-500 dark:text-red-400 mt-1 block" />
            )}
        </>
    );
};

MultiSelect.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    variant: PropTypes.oneOf(['normal', 'large']),
    isValidation: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
    setFieldValue: PropTypes.func.isRequired,
};

MultiSelect.defaultProps = {
    variant: 'normal',
    isValidation: true,
    options: [],
};