import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Define the Validation Schema using Zod
const settingsSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username cannot exceed 20 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  bio: z
    .string()
    .max(200, 'Bio cannot exceed 200 characters')
    .optional(),
  emailNotifications: z.boolean(),
  theme: z.enum(['light', 'dark', 'system'], {
    errorMap: () => ({ message: 'Please select a valid theme' }),
  }),
});

export const SettingsForm = () => {
  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      username: 'johndoe',
      email: 'john@example.com',
      bio: 'Software engineer and tech enthusiast.',
      emailNotifications: true,
      theme: 'system',
    },
  });

  // 3. Form Submission Handler
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Saved Settings:', data);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Account Settings</h2>

      {isSubmitSuccessful && (
        <div style={{ padding: '10px', backgroundColor: '#e6fffa', border: '1px solid #38b2ac', borderRadius: '4px', marginBottom: '1rem', color: '#234e52' }}>
          Settings updated successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Username Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register('username')}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.username && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.username.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email.message}</span>
          )}
        </div>

        {/* Bio Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="bio" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>
            Bio
          </label>
          <textarea
            id="bio"
            rows={3}
            {...register('bio')}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.bio && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.bio.message}</span>
          )}
        </div>

        {/* Theme Select */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="theme" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.25rem' }}>
            Theme
          </label>
          <select id="theme" {...register('theme')} style={{ width: '100%', padding: '8px' }}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
          {errors.theme && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.theme.message}</span>
          )}
        </div>

        {/* Email Notifications Checkbox */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input id="emailNotifications" type="checkbox" {...register('emailNotifications')} />
          <label htmlFor="emailNotifications">Receive email updates & announcements</label>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>

          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ccc',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};