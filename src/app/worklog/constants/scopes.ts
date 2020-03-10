export interface ScopeItem {
  value: number;
  text: string;
  completed: boolean;
}

export const minScope: ScopeItem[] = [
  { value: 10, text: 'min-scope.item1', completed: true },
  { value: 10, text: 'min-scope.item2', completed: true },
  { value: 10, text: 'min-scope.item3', completed: true },
  { value: 20, text: 'min-scope.item4', completed: true }
];

export const normalScope: ScopeItem[] = [
  { value: 20, text: 'normal-scope.item1', completed: true },
  { value: 10, text: 'normal-scope.item2', completed: true },
  { value: 10, text: 'normal-scope.item3', completed: true },
  { value: 10, text: 'normal-scope.item4', completed: true },
  { value: 10, text: 'normal-scope.item5', completed: true },
  { value: 20, text: 'normal-scope.item6', completed: true },
  { value: 10, text: 'normal-scope.item7', completed: true },
  { value: 20, text: 'normal-scope.item8', completed: true },
  { value: 20, text: 'normal-scope.item9', completed: true },
  { value: 10, text: 'normal-scope.item10', completed: true }
];

export const extraScope: ScopeItem[] = [
  { value: 10, text: 'extra-scope.item1', completed: true },
  { value: 10, text: 'extra-scope.item2', completed: true },
  { value: 10, text: 'extra-scope.item3', completed: true },
  { value: 20, text: 'extra-scope.item4', completed: true },
  { value: 20, text: 'extra-scope.item5', completed: true },
  { value: 20, text: 'extra-scope.item6', completed: true }
];
