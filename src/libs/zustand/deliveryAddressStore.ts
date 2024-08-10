import create from 'zustand';

interface DeliveryAddressState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  setDeliveryAddress: (data: Partial<DeliveryAddressState>) => void;
}

export const useDeliveryAddressStore = create<DeliveryAddressState>((set) => ({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  setDeliveryAddress: (data) => set((state) => ({ ...state, ...data })),
}));
