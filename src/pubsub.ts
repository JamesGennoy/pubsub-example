const subscriptions: Record<string, ((message: any) => void)[]> = {};

export const publish = <T = string>(token: string, message: T): void => {
  if (subscriptions[token]) {
    subscriptions[token].forEach((subscription) => subscription(message));
  }
};

export const subscribe = <T = string>(
  token: string,
  callback: (message: T) => void
): void => {
  if (!subscriptions[token]) {
    subscriptions[token] = [];
  }
  subscriptions[token].push(callback);
};
