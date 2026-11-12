#!/bin/bash
# 坚果云blog\posts ↔ 仓库 src/content/posts 双向同步
# 用法:
#   blog_sync.sh pull   ← 坚果云 → 仓库（发文前先拉，用户日常在坚果云改）
#   blog_sync.sh push   ← 仓库 → 坚果云（push 后回写，保持两侧一致）
#   blog_sync.sh diff   ← 只看差异不动作
# 规则: 只同步非 _ 开头的文章（_开头是模板文档）；不覆盖仓库侧更新的文件由用户人工决定 → 用 diff 检查

NY="$HOME/code/blog/src/content/posts"                       # WSL 原生路径（真身）
NC="/mnt/c/Users/peanuts/Nutstore/1/我的坚果云/blog/posts"    # 坚果云同步目录（手机可看）

mkdir -p "$NC"

sync_dir() {
  local src="$1" dst="$2"
  # 只拷非 _ 开头的 .md/.mdx
  find "$src" -maxdepth 1 \( -name "*.md" -o -name "*.mdx" \) ! -name "_*" -print0 |
  while IFS= read -r -d '' f; do
    cp -p "$f" "$dst/" 2>/dev/null
  done
  # 清理坚果云侧已删除的文章残留
  if [ "$src" = "$NY" ]; then
    find "$dst" -maxdepth 1 \( -name "*.md" -o -name "*.mdx" \) ! -name "_*" -print0 |
    while IFS= read -r -d '' f; do
      base=$(basename "$f")
      [ ! -f "$src/$base" ] && rm -f "$f"
    done
  fi
}

case "$1" in
  pull)
    sync_dir "$NC" "$NY"
    echo "[pull] 坚果云 → 仓库 完成"
    ls "$NY" | grep -v "^_" | head -20
    ;;
  push)
    sync_dir "$NY" "$NC"
    echo "[push] 仓库 → 坚果云 完成"
    ;;
  diff)
    echo "=== 仓库有坚果云没有 ==="
    comm -23 <(ls "$NY" | grep -v "^_" | grep -E "\.mdx?$" | sort) <(ls "$NC" 2>/dev/null | sort)
    echo "=== 坚果云有仓库没有 ==="
    comm -13 <(ls "$NY" | grep -v "^_" | grep -E "\.mdx?$" | sort) <(ls "$NC" 2>/dev/null | sort)
    echo "=== 内容差异 ==="
    for f in $(ls "$NC" 2>/dev/null); do
      if [ -f "$NY/$f" ]; then
        cmp -s "$NY/$f" "$NC/$f" || echo "DIFF: $f"
      fi
    done
    ;;
  *)
    echo "用法: blog_sync.sh {pull|push|diff}"
    ;;
esac
