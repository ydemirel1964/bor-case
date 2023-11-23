<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'model' => ['required', 'string', 'max:255'],
            'year' => ['required', 'integer', 'min:1900', 'max:2100'],
            'license_plate' => ['required', 'string', 'max:255'],
            'color' => ['required', 'string', 'max:255'],
            'date_of_purchase' => ['required', 'integer', 'min:1900', 'max:2100'],
            'employee_id' => ['required', 'integer', 'exists:employees,id'],
        ];
    }
}
