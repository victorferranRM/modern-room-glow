import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "guide-bookmarks";

export function useGuideBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = useCallback((guideId: string) => {
    setBookmarks((prev) =>
      prev.includes(guideId)
        ? prev.filter((id) => id !== guideId)
        : [...prev, guideId]
    );
  }, []);

  const isBookmarked = useCallback(
    (guideId: string) => bookmarks.includes(guideId),
    [bookmarks]
  );

  return { bookmarks, toggleBookmark, isBookmarked };
}
