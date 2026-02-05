export enum PanelMode {
  START = 'start',
  VECTOR = 'vector',
  TYPOGRAPHY = 'typography',
  MONOGRAM = 'monogram',
  EXTRACTOR = 'extractor',
  FILTERS = 'filters',
  AUDIT = 'audit'
}

export interface KernelConfig {
  thinkingBudget: number;
  temperature: number;
  model: string;
  deviceContext: string;
  useProModel?: boolean;
}

export interface ExtractionResult {
  name: string;
  description?: string;
  parameters?: Record<string, any>;
  timestamp?: string;
  imageUrl?: string;
  style?: string;
  colors?: string[];
}

export interface CloudArchiveEntry {
  id: string;
  name: string;
  timestamp?: string;
  size?: number;
  type?: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'error' | 'success' | 'warning';
}

export interface PresetItem {
  id: string;
  name: string;
  description: string;
  type?: string;
  parameters?: Record<string, number>;
  timestamp?: string;
  filter?: string;
  dna?: ExtractionResult;
  imageUrl?: string;
  prompt?: string;
}

export interface PresetCategory {
  title: string;
  items: PresetItem[];
}

export type PanelCategory = PresetCategory;

// Add VectorPanelProps since VectorPanel uses it
export interface VectorPanelProps {
  initialData?: any;
  kernelConfig: KernelConfig;
  integrity: number;
  refinementLevel: number;
  onSaveToHistory: (work: any) => void;
  onModeSwitch: (mode: PanelMode, data?: any) => void;
  onSetGlobalDna: (dna: ExtractionResult | null) => void;
  savedPresets: PresetItem[];
  globalDna: ExtractionResult | null;
  onToggleTurbo: () => void;
  addLog: (message: string, type?: LogEntry['type']) => void;
}

// Add other panel props interfaces
export interface TypographyPanelProps extends VectorPanelProps {}
export interface MonogramPanelProps extends VectorPanelProps {}
export interface StyleExtractorPanelProps extends VectorPanelProps {
  onSaveToPresets: (preset: PresetItem) => void;
  onDeletePreset: (id: string) => void;
  activeGlobalDna: ExtractionResult | null;
  onCommitPreset: () => void;
}
export interface ImageFilterPanelProps extends VectorPanelProps {}
export interface PanelHeaderProps {
  title: string;
  integrity: number;
  onBack: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onStartRepair: () => void;
  onStartRefine: () => void;
  onToggleLogViewer: () => void;
}
