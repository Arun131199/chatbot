import { useState } from 'react';

export default function AllinputFields({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    icon,
    error,
    helperText,
    disabled = false,
    required = false,
    variant = 'default', // 'default' or 'outlined'
    size = 'md', // 'sm', 'md', 'lg'
    fullWidth = true,
    className = '',
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isPasswordType = type === 'password';
    const inputType = isPasswordType && showPassword ? 'text' : type;

    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base'
    };

    const variantClasses = {
        default: 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
        outlined: 'border-2 border-gray-300 focus:ring-0 focus:border-blue-500'
    };

    const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';

    return (
        <div className={`mb-4 ${fullWidth ? 'w-full' : ''} ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        {icon}
                    </div>
                )}

                <input
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`
        block w-full 
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${errorClasses}
        ${icon ? 'pl-10' : ''}
        ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'text-white'}
        border rounded-md shadow-sm
        focus:outline-none
        transition-all duration-200
        ${isFocused ? 'ring-2 ring-blue-200' : ''}
    `}
                    {...props}
                />

                {isPasswordType && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                            </svg>
                        )}
                    </button>
                )}
            </div>

            {(error || helperText) && (
                <p
                    id={error ? `${label}-error` : `${label}-helper`}
                    className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}
                >
                    {error || helperText}
                </p>
            )}
        </div>
    );
}