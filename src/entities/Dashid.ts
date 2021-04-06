type id_ = {
  id: number;
};

class Dashid {
  private id: id_;

  constructor(id: id_) {
    this.id = id;
  }

  get dashId() {
    const { id } = this.id;
    return id;
  }
}

export { Dashid };
