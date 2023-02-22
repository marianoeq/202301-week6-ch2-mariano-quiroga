import { CharApiRepo } from "./char.api.repo";

describe("Given a class to build api methods", () => {
  describe("When it is instaciated", () => {
    let repo: CharApiRepo;
    beforeEach(() => {
      repo = new CharApiRepo();
    });
    test("Then loadChars should return an array", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([
          {
            category: "king",
          },
        ]),
      });
      const result = await repo.loadChars();
      expect(result).toEqual([
        {
          category: "king",
        },
      ]);
    });
  });
});
