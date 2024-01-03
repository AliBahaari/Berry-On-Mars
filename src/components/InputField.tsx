import { useEffect, useState } from 'react'

type InputFieldProps = {
  fieldName: string
  label: string
  fieldType: 'text' | 'password'
  onChange: (param: string) => void
  placeholder?: string
  error?: boolean
  value?: string
  helperText?: string
}

function InputField({
  fieldName,
  fieldType,
  label,
  onChange,
  placeholder,
  error,
  value,
  helperText,
}: InputFieldProps) {
  const [fieldValue, setFieldValue] = useState<string>('')
  useEffect(() => {
    setFieldValue(value || '')
  }, [value])

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type={fieldType}
        className={`border px-4 py-2 ${error ? 'border-red-400' : ''}`}
        id={fieldName}
        value={fieldValue}
        onChange={(event) => {
          setFieldValue(event.target.value)
          onChange(event.target.value)
        }}
        placeholder={placeholder}
      />
      <span className='text-[10px]'>{helperText}</span>
    </div>
  )
}

export default InputField
