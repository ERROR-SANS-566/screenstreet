export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIContextPlace {
  name: string;
  address: string;
  category: string;
  description: string;
}

export interface AIRequest {
  messages: AIMessage[];
  locale: string;
  currentPlace?: AIContextPlace;
  nearbyPlaces?: AIContextPlace[];
}

export interface AIResponse {
  message: string;
  error?: string;
}
