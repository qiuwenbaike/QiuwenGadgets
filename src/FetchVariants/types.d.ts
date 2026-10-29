type Variants = 'zh' | 'zh-hans' | 'zh-cn' | 'zh-my' | 'zh-sg' | 'zh-hant' | 'zh-hk' | 'zh-mo' | 'zh-tw';
type VariantResult = Record<Variants, string>;
type VariantRecord = {string: string; variants: VariantResult};
