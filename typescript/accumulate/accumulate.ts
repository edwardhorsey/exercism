const accumulate = <InType,OutType>(items: InType[], callback: (el: InType) => OutType): OutType[] => items.map((item) => callback(item));
export default accumulate;
