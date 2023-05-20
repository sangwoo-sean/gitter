class Commit {
  id: number;
  parent: Commit | null;
  branches: Array<Branch>;

  constructor(id: number, parent: Commit | null) {
    this.id = id;
    this.parent = parent;
    this.branches = [];
  }
}

class Branch {
  name: string;
  base: Commit;
  current: Commit;

  public constructor(name: string, commit: Commit) {
    this.name = name;
    this.base = commit;
    this.current = commit;
  }

  move(commit: Commit) {
    this.current = commit;
  }
}

class Head {
  currentCommit?: Commit;
  currentBranch?: Branch;

  checkoutToBranch(branch: Branch) {
    this.currentBranch = branch;
    this.currentCommit = branch.current;
  }

  checkoutToCommit(commit: Commit) {
    this.currentCommit = commit;
  }
}

export { Head, Branch, Commit };
