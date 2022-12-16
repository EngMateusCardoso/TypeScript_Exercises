var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Negociacao_data, _Negociacao_quantidade, _Negociacao_valor;
export class Negociacao {
    constructor(data, quantidade, valor) {
        _Negociacao_data.set(this, void 0);
        _Negociacao_quantidade.set(this, void 0);
        _Negociacao_valor.set(this, void 0);
        __classPrivateFieldSet(this, _Negociacao_data, data, "f");
        __classPrivateFieldSet(this, _Negociacao_quantidade, quantidade, "f");
        __classPrivateFieldSet(this, _Negociacao_valor, valor, "f");
    }
}
_Negociacao_data = new WeakMap(), _Negociacao_quantidade = new WeakMap(), _Negociacao_valor = new WeakMap();
