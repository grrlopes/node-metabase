interface id_ {
  id: string;
  dashid: number;
}

class RemoveDash {
  private ids: id_;

  constructor(id: id_) {
    this.ids = id;
  }

  get dashIds() {
    const { id, dashid } = this.ids;
    return { id, dashid };
  }
}

export { RemoveDash };
