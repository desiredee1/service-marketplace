import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CustomerRequestForm } from '@/features/market/customer-request-form';
import { ProviderDashboard } from '@/features/market/provider-dashboard';

describe('service marketplace prototype', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('validates required customer request data and shows success', async () => {
    render(<CustomerRequestForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Plumbing' }));
    fireEvent.change(screen.getByLabelText('Short title'), {
      target: { value: 'Leaking bathroom sink' }
    });
    fireEvent.change(screen.getByLabelText('Describe the job'), {
      target: { value: 'The bathroom sink has been leaking under the cabinet for the past two days and needs urgent repair.' }
    });
    fireEvent.change(screen.getByLabelText('City'), {
      target: { value: 'Durban' }
    });
    fireEvent.change(screen.getByLabelText('Address or area'), {
      target: { value: 'Morningside 14 Main Road' }
    });

    fireEvent.click(screen.getByRole('button', { name: /find verified matches/i }));

    await waitFor(() => {
      expect(screen.getByText(/recommended providers/i)).toBeInTheDocument();
    });
  });

  it('allows provider actions to accept or decline leads', async () => {
    render(<ProviderDashboard />);

    await waitFor(() => {
      expect(screen.getByText(/Aiden M\./i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /accept lead/i }));

    await waitFor(() => {
      expect(screen.getByText(/accepted/i)).toBeInTheDocument();
    });
  });
});
